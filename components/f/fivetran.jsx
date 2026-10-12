import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uawrme4my.css';

const viewBox = {"width":24.9,"height":34.2};
const content = `<path class="uawrme4my"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:fivetran"} {...others} />);
}

export default Component;
