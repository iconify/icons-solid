import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gz28_8bzx.css';
import '../../css/b/b93j9cbjr.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="gz28_8bzx"/><path class="b93j9cbjr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:play-outline"} {...others} />);
}

export default Component;
