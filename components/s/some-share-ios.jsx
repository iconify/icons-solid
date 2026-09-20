import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nlttyjbjw.css';
import '../../css/y/ymagrdb8e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nlttyjbjw"/><path class="ymagrdb8e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:some-share-ios"} {...others} />);
}

export default Component;
