import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cnlehkbrv.css';
import '../../css/l/lk7fkuhms.css';
import '../../css/x/xu0ezmoxw.css';
import '../../css/z/zbpfmkbbx.css';
import '../../css/t/tozv8rb1u.css';
import '../../css/m/myub-s3st.css';
import '../../css/q/qj967qzxb.css';
import '../../css/d/dz0zswb-e.css';
import '../../css/c/c45-pnbox.css';
import '../../css/b/bohpwxprh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cnlehkbrv wm-shadow"/><path class="lk7fkuhms wm-k"/><path class="wm-k xu0ezmoxw"/><path class="wm-k zbpfmkbbx"/><path class="tozv8rb1u wm-k"/><path class="myub-s3st wm-k"/><path class="qj967qzxb wm-shine"/><path class="dz0zswb-e wm-a"/><path class="c45-pnbox wm-a"/><path class="bohpwxprh wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:sleigh"} {...others} />);
}

export default Component;
