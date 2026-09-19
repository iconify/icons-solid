import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mnn8ur9fy.css';
import '../../css/a/a994n00sl.css';
import '../../css/o/ofu1v7x0q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mnn8ur9fy"/><path class="a994n00sl"/><path class="ofu1v7x0q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:honda-motorcycles"} {...others} />);
}

export default Component;
