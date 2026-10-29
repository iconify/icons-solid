import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h0gaabbcb.css';
import '../../css/s/siie_seqt.css';
import '../../css/s/s836w_bhh.css';
import '../../css/l/l73eohbjq.css';
import '../../css/n/nmiss2ueu.css';
import '../../css/t/tlya8ccfw.css';
import '../../css/w/wq-dzz77i.css';
import '../../css/z/zh6ktr0ub.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h0gaabbcb wm-shadow"/><path class="siie_seqt wm-k"/><path class="s836w_bhh wm-k"/><path class="l73eohbjq wm-shine"/><path class="nmiss2ueu wm-a"/><path class="tlya8ccfw wm-a"/><path class="wm-a wq-dzz77i"/><path class="wm-shine zh6ktr0ub"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:share-2"} {...others} />);
}

export default Component;
