import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/esey5xbxp.css';
import '../../css/a/a7dbpzb-n.css';
import '../../css/b/b83b6belz.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="esey5xbxp"/><path class="a7dbpzb-n"/><path class="b83b6belz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:solid"} {...others} />);
}

export default Component;
