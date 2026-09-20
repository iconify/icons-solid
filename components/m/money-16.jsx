import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rbf1ts0hu.css';
import '../../css/f/fcgr3_agr.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="rbf1ts0hu"/><path clip-rule="evenodd" class="fcgr3_agr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:money-16"} {...others} />);
}

export default Component;
