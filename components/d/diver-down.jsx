import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eqr5l8bbj.css';
import '../../css/g/gp7kg8iqy.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="eqr5l8bbj"/><path class="gp7kg8iqy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:diver-down"} {...others} />);
}

export default Component;
