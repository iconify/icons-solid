import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x-v_1rjed.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="x-v_1rjed"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:align-justify"} {...others} />);
}

export default Component;
