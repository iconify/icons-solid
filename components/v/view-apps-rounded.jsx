import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.tz61bebmn {
  fill: currentColor;
  d: path("M2.944 18.839q-.373.055-.658-.174q-.286-.23-.286-.61V5.946q0-.38.286-.61q.285-.23.658-.173l3.399.56q.298.043.487.267q.19.223.19.515v10.992q0 .292-.19.515t-.487.267zm7.268-.704q-.344 0-.576-.233q-.232-.232-.232-.575V6.654q0-.344.232-.576t.576-.232h3.577q.343 0 .575.232t.232.576v10.673q0 .343-.232.575t-.575.232zm7.445.143q-.298-.044-.487-.267q-.19-.223-.19-.515V6.504q0-.292.19-.515t.487-.267l3.399-.56q.373-.056.658.173q.286.23.286.61v12.11q0 .38-.286.61q-.285.23-.658.173z");
}
</style><path class="tz61bebmn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:view-apps-rounded"} {...others} />);
}

export default Component;
