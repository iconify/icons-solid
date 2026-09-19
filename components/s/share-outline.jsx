import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/svm6yqi6k.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="svm6yqi6k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:share-outline"} {...others} />);
}

export default Component;
