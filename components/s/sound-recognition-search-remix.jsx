import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/whvue4bqg.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="whvue4bqg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:sound-recognition-search-remix"} {...others} />);
}

export default Component;
