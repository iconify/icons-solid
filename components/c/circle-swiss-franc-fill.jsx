import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i1bq_0bwt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i1bq_0bwt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:circle-swiss-franc-fill"} {...others} />);
}

export default Component;
