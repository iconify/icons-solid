import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nb0l61w-t.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="nb0l61w-t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:circle-minus-sharp-fill"} {...others} />);
}

export default Component;
