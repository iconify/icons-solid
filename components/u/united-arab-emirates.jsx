import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s7x5h9bzy.css';
import '../../css/i/ivyaaxbeo.css';
import '../../css/c/cyvrsf2ph.css';
import '../../css/s/sk4x3qaqt.css';
import '../../css/s/snp287xku.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="s7x5h9bzy"/><path class="ivyaaxbeo"/><path class="cyvrsf2ph"/><path class="sk4x3qaqt"/><path class="snp287xku"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:united-arab-emirates"} {...others} />);
}

export default Component;
