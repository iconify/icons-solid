import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dmp6hg-nz.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="dmp6hg-nz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pajamas:doc-new"} {...others} />);
}

export default Component;
