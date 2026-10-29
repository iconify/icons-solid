import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bhm81xbjd.css';
import '../../css/h/hqfaq1dih.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bhm81xbjd"/><path class="hqfaq1dih"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:zap"} {...others} />);
}

export default Component;
