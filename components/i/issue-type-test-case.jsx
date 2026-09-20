import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/njc_fzg-r.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="njc_fzg-r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pajamas:issue-type-test-case"} {...others} />);
}

export default Component;
