import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/me9fu616u.css';
import '../../css/b/blt65bfce.css';
import '../../css/u/utyj_2zie.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="me9fu616u"/><path class="blt65bfce"/><path class="utyj_2zie"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:inbox-download-fill"} {...others} />);
}

export default Component;
