import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/be-3lv5bq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="be-3lv5bq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:accounting-calculator-1"} {...others} />);
}

export default Component;
