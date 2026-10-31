import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r-5hcsb2x.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="r-5hcsb2x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"sidekickicons:arrow-uturn-up-left-16-solid"} {...others} />);
}

export default Component;
