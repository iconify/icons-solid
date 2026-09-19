import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/a/ax3qas8uv.css';
import '../../css/f/fmlca6ojk.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGyEcOuHYh"><g class="wwvp95byt"><path class="ax3qas8uv"/><path clip-rule="evenodd" class="fmlca6ojk"/></g></mask></defs><path mask="url(#SVGyEcOuHYh)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:damage-map"} {...others} />);
}

export default Component;
