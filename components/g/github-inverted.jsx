import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tc6-f2oia.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="tc6-f2oia"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codicon:github-inverted"} {...others} />);
}

export default Component;
