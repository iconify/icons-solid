import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f4mo4nolz.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="f4mo4nolz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:share-link-remix"} {...others} />);
}

export default Component;
