import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ljj5lbnaa.css';
import '../../css/o/o7a58mbsb.css';
import '../../css/f/fruy1-c_a.css';
import '../../css/y/y_dajcvjj.css';
import '../../css/n/nps6-ccvx.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ljj5lbnaa"/><path class="o7a58mbsb"/><path class="fruy1-c_a"/><path class="y_dajcvjj"/><path clip-rule="evenodd" class="nps6-ccvx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:uni"} {...others} />);
}

export default Component;
