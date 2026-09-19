import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/r/r37l61bly.css';
import '../../css/g/gtqwt3nvm.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path class="r37l61bly"/><path class="gtqwt3nvm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:planet"} {...others} />);
}

export default Component;
