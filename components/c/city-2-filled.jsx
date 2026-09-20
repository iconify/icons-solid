import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cvy8sjoer.css';
import '../../css/b/b-nsf-bwn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cvy8sjoer"/><path class="b-nsf-bwn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:city-2-filled"} {...others} />);
}

export default Component;
