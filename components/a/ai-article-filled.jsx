import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ilg756wim.css';
import '../../css/l/llov8mbku.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ilg756wim"/><path class="llov8mbku"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:ai-article-filled"} {...others} />);
}

export default Component;
