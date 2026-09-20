import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ao96m-b6v.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ao96m-b6v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:some-embed"} {...others} />);
}

export default Component;
