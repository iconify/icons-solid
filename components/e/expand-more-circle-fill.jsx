import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/ge7fm3s-x.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ge7fm3s-x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:expand-more-circle-fill"} {...others} />);
}

export default Component;
