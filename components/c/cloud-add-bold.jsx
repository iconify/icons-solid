import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b8lu4ibzi.css';
import '../../css/a/asyh4bbyc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="b8lu4ibzi"/><path class="asyh4bbyc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:cloud-add-bold"} {...others} />);
}

export default Component;
