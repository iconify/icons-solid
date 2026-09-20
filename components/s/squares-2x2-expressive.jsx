import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dbn-w6b2c.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="dbn-w6b2c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:squares-2x2-expressive"} {...others} />);
}

export default Component;
