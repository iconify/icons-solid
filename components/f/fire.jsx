import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/snp287xku.css';
import '../../css/e/eog965m6o.css';
import '../../css/z/z_quw6cne.css';
import '../../css/f/f99tvmtdg.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="snp287xku"/><path class="eog965m6o"/><path class="z_quw6cne"/><path class="f99tvmtdg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:fire"} {...others} />);
}

export default Component;
