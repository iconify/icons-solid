import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jas9_-b0f.css';
import '../../css/h/hf3ru2_zl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="duoicon-secondary-layer jas9_-b0f"/><path class="duoicon-primary-layer hf3ru2_zl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"duo-icons:alert-triangle"} {...others} />);
}

export default Component;
