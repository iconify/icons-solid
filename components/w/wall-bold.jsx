import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.qi5akkjpj {
  fill: currentColor;
  d: path("M224 44H32a12 12 0 0 0-12 12v144a12 12 0 0 0 12 12h192a12 12 0 0 0 12-12V56a12 12 0 0 0-12-12M92 140v-24h72v24Zm-48 0v-24h24v24Zm144-24h24v24h-24Zm24-24h-72V68h72Zm-96-24v24H44V68Zm-72 96h72v24H44Zm96 24v-24h72v24Z");
}
</style><path class="qi5akkjpj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:wall-bold"} {...others} />);
}

export default Component;
