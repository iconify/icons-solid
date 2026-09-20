import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g-0e6gban.css';
import '../../css/c/czb_lcctb.css';
import '../../css/m/m965-ugvd.css';
import '../../css/l/lzgh9tr9w.css';
import '../../css/l/layoymx-c.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="g-0e6gban"/><path class="czb_lcctb"/><path class="m965-ugvd"/><path class="lzgh9tr9w"/><path class="layoymx-c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:sparkles"} {...others} />);
}

export default Component;
