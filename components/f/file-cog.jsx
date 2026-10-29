import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/z/z42-uoduv.css';
import '../../css/i/ivglvmfxo.css';
import '../../css/s/s8cm_kdta.css';
import '../../css/n/naq2xkbbj.css';
import '../../css/y/y3-6ozbhp.css';
import '../../css/s/shgew9ugv.css';
import '../../css/z/zu_df8byf.css';
import '../../css/f/fn4hprg9s.css';
import '../../css/v/vebw2ebpb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="wm-shadow z42-uoduv"/><path class="ivglvmfxo"/><path class="s8cm_kdta"/><path class="naq2xkbbj"/><path class="wm-shine y3-6ozbhp"/><path class="shgew9ugv wm-s"/><path class="wm-s zu_df8byf"/><path class="fn4hprg9s wm-s"/><path class="vebw2ebpb wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:file-cog"} {...others} />);
}

export default Component;
