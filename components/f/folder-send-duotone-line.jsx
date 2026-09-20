import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ukm9jj2re.css';
import '../../css/m/m57h5rbyw.css';
import '../../css/a/ara4m-bwr.css';
import '../../css/w/w49j0rbvv.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVGnK9P7b6b"><g class="ukm9jj2re"><path class="m57h5rbyw"/><path class="ara4m-bwr"/></g></mask></defs><path mask="url(#SVGnK9P7b6b)" class="w49j0rbvv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:folder-send-duotone-line"} {...others} />);
}

export default Component;
