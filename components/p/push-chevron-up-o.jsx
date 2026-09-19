import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bob346bis.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="bob346bis"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gg:push-chevron-up-o"} {...others} />);
}

export default Component;
