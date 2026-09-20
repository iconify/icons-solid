import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/quhkq7b5u.css';
import '../../css/w/w3xcfabgt.css';
import '../../css/w/wd2tq0qpl.css';
import '../../css/q/qahbz5jfa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="quhkq7b5u"/><path class="w3xcfabgt"/><path class="wd2tq0qpl"/><path class="qahbz5jfa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:icecream-cone"} {...others} />);
}

export default Component;
