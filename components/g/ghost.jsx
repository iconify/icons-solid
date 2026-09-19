import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ckv68lbrl.css';
import '../../css/r/r_d7t_bew.css';
import '../../css/c/cg7d2pfom.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ckv68lbrl"/><circle class="r_d7t_bew"/><circle class="cg7d2pfom"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:ghost"} {...others} />);
}

export default Component;
