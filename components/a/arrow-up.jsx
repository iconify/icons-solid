import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/awyfp4bqb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="awyfp4bqb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:arrow-up"} {...others} />);
}

export default Component;
