import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/m/mywr10jpw.css';
import '../../css/o/o_8rp_bdd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="mywr10jpw"/><path class="o_8rp_bdd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:square-enix-logo"} {...others} />);
}

export default Component;
