import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gj1rq-cte.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gj1rq-cte"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:accusoft"} {...others} />);
}

export default Component;
