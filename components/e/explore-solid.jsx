import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kzug-_pza.css';
import '../../css/p/pknasvape.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="kzug-_pza"/><path class="pknasvape"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:explore-solid"} {...others} />);
}

export default Component;
