import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/t/tdpwy51xn.css';
import '../../css/y/y5zapgiuw.css';
import '../../css/g/g7sevbc9z.css';
import '../../css/b/bckxs1bbv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><rect class="tdpwy51xn"/><rect class="y5zapgiuw"/><rect class="g7sevbc9z"/><rect class="bckxs1bbv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:darhboard"} {...others} />);
}

export default Component;
