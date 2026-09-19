import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/v/v1uuu4bqy.css';
import '../../css/c/c0dbrnbqp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="v1uuu4bqy"/><path class="c0dbrnbqp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:bulletproof-vest"} {...others} />);
}

export default Component;
