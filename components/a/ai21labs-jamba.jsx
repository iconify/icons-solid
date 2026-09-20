import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/io3xdv68f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="io3xdv68f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:ai21labs-jamba"} {...others} />);
}

export default Component;
