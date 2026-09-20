import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dgq-hoi-s.css';
import '../../css/b/bqo7skq6r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dgq-hoi-s"/><path class="bqo7skq6r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:folder-search-filled"} {...others} />);
}

export default Component;
