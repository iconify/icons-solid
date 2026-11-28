import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ab-gq9bkn.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/d/dmesvbbbc.css';
import '../../css/g/gz3bf3izr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ab-gq9bkn secondary"/><g class="dt0cm9dhy primary"><path class="dmesvbbbc"/><circle class="gz3bf3izr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:eye-duo"} {...others} />);
}

export default Component;
