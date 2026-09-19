import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b4uk6em5f.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="b4uk6em5f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:back"} {...others} />);
}

export default Component;
