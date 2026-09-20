import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g2ilk6ujv.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="g2ilk6ujv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:water-melon-remix"} {...others} />);
}

export default Component;
