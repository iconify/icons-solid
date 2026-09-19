import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z8fx6xbub.css';
import '../../css/e/e8yq54w-x.css';

const viewBox = {"width":36,"height":36};
const content = `<path class="z8fx6xbub"/><path class="e8yq54w-x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:file-share-2-line"} {...others} />);
}

export default Component;
