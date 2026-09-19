import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s2sandlqm.css';
import '../../css/x/xgtqlm-cw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="duoicon-secondary-layer s2sandlqm"/><path class="duoicon-primary-layer xgtqlm-cw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"duo-icons:file"} {...others} />);
}

export default Component;
